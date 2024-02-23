import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { CustomTable } from "~/components/commons/CustomTable";
import { RegisteredUserT } from "~/components/landing/main-section/types";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import db from "~/utils/db";
import { users } from "~/utils/db/schema";


export const action = async ({
    params,
    request,
  }: ActionFunctionArgs) => {
    const body = Object.fromEntries( await request.formData())

    if (body.password === 'admin123') {
        const results = await db
        .select({
          name: users.name,
          lastName: users.lastName,
          email: users.email,
          phone: users.phone,
          doctorCode: users.doctorCode,
        })
        .from(users);
        return {status: 200, results}
    }
    return {status: 401}

  };

const columns: ColumnDef<RegisteredUserT>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "doctorCode",
    header: "Médico",
  },
];

const Users = () => {
  const actionData = useActionData<{status: number, results?: RegisteredUserT[]}>()
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (actionData?.status === 200) {
        setIsValid(true)
    }
  }, [actionData])
  if (!isValid) {
    return (
      <Form
        method="POST"
        className="flex justify-center h-[100vh] flex-col items-center align-middle"
      >
        <div className="w-[200px]">
          <Label className="mb-[12px]">Introduce el password:</Label>
          <Input name="password" type="password" />
          <Button type="submit" className="mt-[12px] w-full">
            Entrar
          </Button>
        </div>
      </Form>
    );
  }

  return (
    <section className="md:px-[48px] md:py-[24px]">
      <CustomTable data={actionData && actionData.results ? actionData?.results : []} columns={columns} />
    </section>
  );
};

export default Users;
