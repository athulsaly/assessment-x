import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TableRow } from "./UserTile";

export function EmployeeDetails({
  user,
  isOpen,
  onOpenChange,
}: {
  user: User;
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] md:max-w-xl">
        <DialogHeader className="flex flex-row gap-x-4 items-center">
          <img
            src={user.image}
            alt={user.username}
            className="w-16 h-16 rounded-full p-1 border object-cover"
          />
          <div>
            <DialogTitle className="text-left">{`${user.firstName} ${user.lastName}`}</DialogTitle>
            <DialogDescription>{`${user.company.title}, ${user.company.department}.`}</DialogDescription>
          </div>
        </DialogHeader>
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
              <TableRow fieldName="Birthday" value={user.birthDate} />
              <TableRow fieldName="Age" value={user.age.toString()} />
              <TableRow fieldName="Blood Group" value={user.bloodGroup} />
            </tbody>
          </table>
        </div>
        <DialogFooter className="flex gap-x-4">
          <Button size="sm">Bookmark</Button>
          <Button size="sm" variant="secondary">
            Edit
          </Button>
          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
