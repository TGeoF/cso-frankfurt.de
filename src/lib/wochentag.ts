export default function wochentag(day: number): string {
	const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
	return days[day];
}