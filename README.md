# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://prnt.sc/u7mY7kyMOxZ-

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://prnt.sc/O8TBR2HiKGvT

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone
322-22-22

https://prnt.sc/fxB0XyDeuEzQ

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://prnt.sc/rsVgEH3DVJYR
