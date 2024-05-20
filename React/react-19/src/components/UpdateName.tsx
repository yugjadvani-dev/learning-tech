import { useState } from "react";

const UpdateName = () => {
    const [name, setName] = useState(“”);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    }
    redirect("/path");
  };

  return (
    <div>
      
    </div>
  )
}

export default UpdateName
