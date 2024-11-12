import React from "react";
import { Bookmark, Edit, Trash } from "lucide-react";

export const TableRow = ({
  fieldName,
  value,
}: {
  fieldName: string;
  value: string;
}) => {
  return (
    <tr>
      <th scope="row" className="text-gray-900 whitespace-nowrap">
        {fieldName}
      </th>
      <td className="">{value}</td>
    </tr>
  );
};

const UserTile = ({ user, onClick }: { user: User; onClick: () => void }) => {
  const onIconClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    eventName: string
  ) => {
    event.stopPropagation();
    window.alert(
      `Do you want to ${eventName.toLowerCase()} ${user.firstName}'s profile?`
    );
  };
  return (
    <div
      onClick={onClick}
      className="relative m-auto w-[355px] lg:w-[420px] xl:w-[375px] h-[250px] border rounded shadow-md bg-gray-50 p-4 cursor-pointer"
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex w-full justify-between">
          <div className="flex w-full gap-x-4 items-center">
            <img
              src={user.image}
              alt={user.username}
              className="w-14 rounded-full border object-cover p-1"
            />
            <div className="flex flex-col">
              <div className="capitalize font-bold">
                {user.firstName + " " + user.lastName}
              </div>
              <div className="text-sm h-10">{`${user.company.title}, ${user.company.department}.`}</div>
            </div>
          </div>
          <Bookmark
            className="cursor-pointer"
            color="green"
            onClick={(event) => onIconClick(event, "Bookmark")}
          />
        </div>
        <div className="relative overflow-x-hidden">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <TableRow fieldName="Employee ID" value={user.ein} />
              <TableRow fieldName="Username" value={user.username} />
              <TableRow fieldName="Email" value={user.email} />
              <TableRow fieldName="Phone" value={user.phone} />
              <TableRow
                fieldName="Address"
                value={`${user.address.address}, ${user.address.postalCode}.`}
              />
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end gap-x-3 items-center  bottom-4 right-4">
          <Edit
            className="cursor-pointer w-5"
            onClick={(event) => onIconClick(event, "Edit")}
          />
          <Trash
            className="cursor-pointer w-5"
            color="red"
            onClick={(event) => onIconClick(event, "Delete")}
          />
        </div>
      </div>
    </div>
  );
};

export default UserTile;
