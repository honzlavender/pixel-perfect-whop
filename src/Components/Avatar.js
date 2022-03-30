import pic from "../images/20170518183800-gary-vaynerchuk-hero1.jpg";

export default function Avatar(){
    return(
        <img
        src={pic}
        alt="pic"
        width={40}
        height={40}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    )
}