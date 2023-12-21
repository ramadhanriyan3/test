import { Image } from "react-bootstrap";

interface ItemProps {
  value: string;
}
function ServiceItem({ value }: ItemProps) {
  return (
    <div className="d-flex align-items-center pb-3">
      <Image src="/Group-53.png" alt="" />
      <p className="mb-0 ms-3">{value}</p>
    </div>
  );
}

export default ServiceItem;
