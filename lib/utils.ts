export function formatMonthYear(date: string) {
  if (date === "present") return "Present";
  const [year, month] = date.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" },
  );
}
