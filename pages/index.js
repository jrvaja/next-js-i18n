import { useRouter } from "next/router";
import { i18n, Link, withTranslation } from "../i18n";

const IndexPage = ({ t }) => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  return (
    <div className="p-8">
      <h1>Index page</h1>
      <h1 className="font-semibold text-blue-500">Hello: {t("APP_TITLE")}</h1>
      <button
        type="button"
        className="p-4 bg-green-500"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
        }
      >
        {t("change-locale")}
      </button>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"],
  };
};
export default withTranslation("common")(IndexPage);
