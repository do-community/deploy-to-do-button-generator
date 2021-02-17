import { useFormContext, useFieldArray } from "react-hook-form";

export default function ConfigForm({ setData }) {
  const { register, watch, errors, control } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "spec.services",
    control: control,
  });

  // WARNING. we wrote our own handleSubmit (not react-hook-form's) because chris is dum dum
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* name of our project */}
        <div className="space-y-1">
          <label className="block text-sm font-bold text-gray-600">
            Project Name
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 rounded"
            name="spec.name"
            ref={register}
          />
        </div>

        {/* services  ====================================================== */}
        {/* services  ====================================================== */}
        {/* services  ====================================================== */}
        <div className="flex justify-between items-center pt-6">
          <h2 className="font-extrabold text-3xl">Services</h2>
        </div>

        {/* service name */}
        {fields.map((field, index) => (
          <div key={index} className="space-y-4 pb-4">
            {/* service name */}
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-600">
                Service #{index + 1}
              </label>
              <input
                type="text"
                className="w-full py-2 px-3 rounded"
                name={`spec.services[${index}].name`}
                defaultValue={field.name}
                ref={register}
              />
            </div>

            {/* service git url and branch */}
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label className="mb-1 block text-sm font-bold text-gray-600">
                  Git Repo URL
                </label>
                <input
                  type="text"
                  className="w-full py-2 px-3 rounded"
                  name={`spec.services[${index}].git.repo_clone_url`}
                  ref={register}
                />
              </div>
              <div className="w-1/3">
                <label className="mb-1 block text-sm font-bold text-gray-600">
                  Git Branch
                </label>
                <input
                  type="text"
                  className="w-full py-2 px-3 rounded"
                  name={`spec.services[${index}].git.branch`}
                  ref={register}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="text-right">
          <button
            type="button"
            className="inline-flex items-center py-2 px-3 bg-blue-600 text-blue-50 rounded text-xs"
            onClick={() =>
              append({ name: "", git: { branch: "", repo_clone_url: "" } })
            }
          >
            Add Service{" "}
            <svg
              className="h-3 w-3 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
