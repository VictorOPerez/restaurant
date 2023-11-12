import "./footerR.css";

const FooterR = () => {
  return (
    <div className="footerR">
      <ul>
        <li
          style={{ marginBottom: "10px", fontSize: "18px", fontWeight: "600" }}
        >
          Locations
        </li>
        <li>17165231 NW 127th Ave</li>
        <li>Miami Gardens</li>
        <li> FL 33056123</li>
      </ul>
      <ul>
        <li
          style={{ marginBottom: "10px", fontSize: "18px", fontWeight: "600" }}
        >
          Phone
        </li>
        <li>(345)-436-1772</li>
      </ul>
      <ul>
        <li
          style={{ marginBottom: "10px", fontSize: "18px", fontWeight: "600" }}
        >
          lorem
        </li>
        <div style={{ display: "flex", gap: "50px" }}>
          <div>
            <li>Monday-Thursday</li>
            <li>Friday</li>
            <li>Saturday-Sunday</li>
          </div>
          <div>
            <li>10:00 am - 9:00 pm</li>
            <li>4:00 pm - 11:00 pm</li>
            <li>10:00 am - 11:00 pm</li>
          </div>
        </div>
      </ul>
      <ul>
        <li
          style={{
            marginBottom: "10px",
            fontSize: "38px",
            fontWeight: "600",
            fontFamily: "Dancing Script",
          }}
        >
          Steakhouse
        </li>
        <li
          style={{
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          steak@Steakhouse.com
        </li>
      </ul>
    </div>
  );
};

export default FooterR;
