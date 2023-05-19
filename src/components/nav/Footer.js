export default function Footer() {
  return (
    <div
      className="text-center p-4 bg-dark text-light mt-4"
      // style={{ bottom: "0", position: "fixed", width: "100%" }}
    >
      <h4 className="mt-4">KJT Estate App - Buy Sell or Rent Properties</h4>
      <p className="mt-3">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
