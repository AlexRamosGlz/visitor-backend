export function ErrorHandler(message = "runtime error", error) {
  if (!(error instanceof Error)) return;

  const errorStack = {
    message,
    error: JSON.stringify(error,
        Object.getOwnPropertyNames(error)
      )
  };

  

  console.error(error);

  return(JSON.stringify(errorStack));
}
