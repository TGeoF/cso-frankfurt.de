export default interface Konzert {
	projektnummer: number
	titel: string
	datumUhrzeit1: string
	datumUhrzeit2?: string
	ort: string
	programm: string[]
	eintrittspreise: string
	solistinnenUndLeitung: string[]
	flyer?: {
		fields: {
			file: {
				url: string
			}
		}
	}
}