const User = ({
  image,
  firstName,
  lastName,
  age,
  gender,
  email,
  phone,
  company,
  role,
  city,
}) => {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-5 text-white">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={`Foto de ${firstName} ${lastName}`}
            className="h-20 w-20 rounded-full border-4 border-white/80 object-cover shadow-md"
          />

          <div>
            <h2 className="text-xl font-bold">
              {firstName} {lastName}
            </h2>

            <p className="mt-1 text-sm text-blue-100">
              {age} anos • {gender}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Email
          </p>
          <p className="break-all text-sm text-gray-700">
            {email}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Telefone
          </p>
          <p className="text-sm text-gray-700">
            {phone}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Empresa
          </p>
          <p className="text-sm text-gray-700">
            {company}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Cargo
          </p>
          <p className="text-sm text-gray-700">
            {role}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Cidade
          </p>
          <p className="text-sm text-gray-700">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;