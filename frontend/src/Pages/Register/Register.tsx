import registerImage from "../../assets/images/Illustration Section.png";
import preclinicLogo from "../../assets/images/Icon.svg";
import facebook from "../../assets/images/Vector.svg";
import apple from "../../assets/images/path4.svg";
import google from "../../assets/images/logo googleg 48dp.svg";
import styles from "./Register.module.css";
const Register = () => {
  return (
    <div className={styles.register__container}>
      <section className={styles.register__container_side_image}>
        <img
          src={registerImage}
          alt="A side image showing a woman registering"
        />
      </section>
      <section className={styles.register__container_form}>
        <h1>
          <img src={preclinicLogo} alt="preclinic logo" width={48} />
          Preclinic
        </h1>
        <form action="" className={styles.register__container_form_content}>
          <h2>Register</h2>
          <p>please enter your details to create account</p>
          <label htmlFor="fullname">full name</label>
          <section className={styles.register__container_form_content__input}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 640 640"
            >
              <path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
            </svg>
            <input type="text" id="fullname" placeholder="Enter Name" />
          </section>

          <label htmlFor="email">Email address</label>
          <section className={styles.register__container_form_content__input}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 640 640"
            >
              <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
            </svg>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter email address"
            />
          </section>

          <label htmlFor="password">Password</label>
          <section className={styles.register__container_form_content__input}>
            {" "}
            <svg
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z" />
            </svg>
            <input name="" id="password" placeholder="*********" />
          </section>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <section className={styles.register__container_form_content__input}>
            <svg
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z" />
            </svg>
            <input
              type="password"
              name=""
              id="confirmPassword"
              placeholder="*********"
            />
          </section>

          <section
            className={styles.register__container_form_content__checkbox}
          >
            <input type="checkbox" name="" id="terms" checked />
            <label
              htmlFor="terms"
              className={
                styles.register__container_form_content__checkbox__label
              }
            >
              I agree to the <span>Term of service</span> <span>& </span>{" "}
              <span>privacy policy</span>
            </label>
          </section>

          <button className={styles.register__container_form_content_button}>
            Register
          </button>
          <section
            className={styles.register__container_form_content_logginOption}
          >
            <div></div>
            <p>or</p>
            <div></div>
          </section>

          <section
            className={styles.register__container_form_content_socialLogging}
          >
            <div>
              <img src={facebook} alt="facebook logo" width={32} />
            </div>
            <div>
              <img src={google} alt="google logo" width={32} />
            </div>
            <div>
              <img src={apple} alt="apple logo" width={32} />
            </div>
          </section>
          <p className={styles.register__container_form_content_login}>
            Already have an account? <a href="">Login</a>
          </p>
        </form>
        <footer>
          <p>
            <small>Copyright@2026 - preclinic</small>
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Register;
