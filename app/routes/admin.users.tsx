import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode, useEffect, useState } from "react";
import { CustomTable } from "~/components/commons/CustomTable";
import { RegisteredUserT } from "~/components/landing/main-section/types";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import db from "~/utils/db";
import { users } from "~/utils/db/schema";
import { formatFromDate, formatMoney } from "~/utils/commons/formatters";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  try {
  const body = Object.fromEntries(await request.formData());

  if (body.password === "admin123") {
    const results = await db
      .select({
        name: users.name,
        lastName: users.lastName,
        email: users.email,
        phone: users.phone,
        doctorCode: users.doctorCode,
        creditAmount: users.creditAmount,
        creditMonths: users.creditMonths,
        createdAt: users.createdAt
      })
      .from(users);
    return { status: 200, results };
  }
} catch (error) {
  console.log(error, 'eririerjskhjdahjks')
}
  return { status: 401 };
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
  {
    accessorKey: "creditMonths",
    header: "Plazo",
  },
  {
    accessorKey: "creditAmount",
    header: "Monto",
    cell: (row) => {
      const amount = formatMoney(Number(row.renderValue()), true);
      return (
        <div className="flex- items-center">
          <span>{amount}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de registro",
    cell: (row) => {
      const value = formatFromDate(new Date(row.getValue() as string))
      return (
        <div className="flex- items-center">
          <span>{value}</span>
        </div>
      );
    },
  },
];

const Users = () => {
  const actionData = useActionData<{
    status: number;
    results?: RegisteredUserT[];
  }>();

  const navigation = useNavigation();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (actionData?.status === 200) {
      setIsValid(true);
    }
  }, [actionData]);

  if (!isValid) {
    return (
      <Form
        method="POST"
        className="flex justify-center h-[100vh] flex-col items-center align-middle"
      >
        <div className="w-[200px]">
          <Label className="mb-[12px]">Introduce el password:</Label>
          <Input name="password" type="password" />
          <Button
            disabled={navigation.state === "submitting"}
            type="submit"
            className="mt-[12px] w-full"
          >
            {navigation.state === "submitting" && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Entrar
          </Button>
        </div>
      </Form>
    );
  }

  return (
    <section className="md:px-[48px] md:py-[24px] mt-[96px]">
      <CustomTable
        data={actionData && actionData.results ? actionData?.results : []}
        columns={columns}
      />
    </section>
  );
};

export default Users;
