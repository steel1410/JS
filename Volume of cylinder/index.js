const q_cylinder = 'Впишите высоту цилиндра';
const h_cylinder1 = promt(q_cylinder);
const q_diametr = 'Впишите диаметр цилиндра';
const d_cylinder = promt(q_diametr);
const o_cylinder = h_cylinder1 * 3.14 * d_cylinder/1000;
const answer = `Обьем цилиндра - ${o_cylinder}`;
alert(answer)