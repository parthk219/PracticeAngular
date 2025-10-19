| Feature / Aspect      | 👨‍👩‍👧 Parent → Child                                    | 👶 Child → Parent                                 |
| --------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| 1️⃣ Direction         | Data **parent se child** jata hai                          | Data **child se parent** jata hai                 |
| 2️⃣ Decorator         | `@Input()` use hota hai                                    | `@Output()` use hota hai                          |
| 3️⃣ Mechanism         | **Property binding** `[ ]`                                 | **Event binding** `( )`                           |
| 4️⃣ Syntax (template) | `<app-child [msg]="parentMsg">`                            | `<app-child (notify)="onNotify($event)">`         |
| 5️⃣ Child code        | `@Input() msg!: string;`                                   | `@Output() notify = new EventEmitter<string>();`  |
| 6️⃣ Trigger           | Parent variable change hone par child auto update hota hai | Child `emit()` karta hai jab kuch action hota hai |
| 7️⃣ Flow type         | **One-way: Parent → Child**                                | **One-way: Child → Parent (event-based)**         |
