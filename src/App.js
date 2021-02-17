import { useForm, FormProvider } from "react-hook-form";
import ConfigForm from "./components/ConfigForm";
import YamlViewer from "./components/YamlViewer";

const config = {
  spec: {
    name: "sample-golang",
    services: [
      {
        name: "web",
        git: {
          branch: "main",
          repo_clone_url: "https://github.com/digitalocean/sample-golang.git",
        },
        envs: [
          {
            key: "DB_FOO_1",
            value: "DB-password-testvalue",
            type: "SECRET",
          },
          {
            key: "EMAIL",
            scope: "RUN_TIME",
          },
          {
            key: "MESSAGE",
            value: "This is a greeting message",
          },
          {
            key: "DATABASE_URL",
            scope: "RUN_TIME",
            value: "${example-db.DATABASE_URL}",
          },
        ],
      },
    ],
    databases: [
      {
        name: "example-db",
      },
    ],
  },
};

export default function App() {
  const methods = useForm({ defaultValues: config });

  const data = methods.watch();

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen p-5 grid lg:grid-cols-2 gap-5">
        {/* left side form */}
        <div className="bg-gray-200 rounded-lg">
          {/* header */}
          <div className="bg-blue-600 text-blue-50 font-bold rounded-t-lg py-4 px-6">
            Create Your Deploy to DigitalOcean Button
          </div>

          {/* content */}
          <div className="p-10">
            <ConfigForm />
          </div>
        </div>

        {/* right side output */}
        {data && <YamlViewer data={data} />}
      </div>
    </FormProvider>
  );
}
