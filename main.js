const data = ["Иван", "Иванов", "Отдел разработки", "Программист", 2000];
function func([name, surname, info1, info2, info3]) {
  const info = `${info1} ${info2} ${info3}`;
  console.log(name, surname, info);
}
func(data);
