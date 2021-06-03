import { Contributors, SocialMedia } from "../../declerations";
import { SOCIAL, CONTRIBUTORS } from "../../static";

export const contributors: Contributors[] = [
	{
		name: "Hrafn Loftsson",
		paragraph:
			"Hrafn Loftsson er dósent í tölvunarfræði við Háskólann í Reykjavík (HR) og meðlimur í Gervigreindarsetri og Mál- og raddtæknistofu HR. Rannsóknir Hrafns eru á sviði máltækni sem er rannsóknar- og þróunarsvið hvers markmið er að þróa búnað sem getur unnið með og skilið náttúruleg tungumál og stuðlað að notkun þeirra í samskiptum manns og tölvu. Rannsóknir og þróunarverkefni Hrafns hafa sérstaklega beinst að smíði hugbúnaðar til að vinna með og greina íslensku.",
		image: CONTRIBUTORS.HRAFN_LOFTSSON,
		socials: [
			{
				type: SocialMedia.Website,
				link: "https://www.ru.is/kennarar/hrafn/",
			},
		],
	},
	{
		name: "Njáll Skarphéðinsson",
		paragraph:
			"Keflvíkingurinn Njáll Skarphéðinsson hefur fengið inngöngu í Carnegie Mellon-háskóla í Pittsburgh í Pennsylvaníu í Bandaríkjunum. Carnegie Mellon hefur unnið sér inn orðspor fyrir að vera fremsti háskóli í heiminum þegar kemur að tölvunarfræði. Njáll er að ljúka námi við Háskólann í Reykjavík með 10,0 í meðaleinkunn  á útskriftarárinu.",
		image: CONTRIBUTORS.NJALL_SKARPHEDINSSON,
		socials: [
			{
				type: SocialMedia.Instagram,
				link: "https://instagram.com/njallis",
			},
			{
				type: SocialMedia.LinkedIn,
				link: "https://www.linkedin.com/in/njalls/",
			},
		],
	},
	{
		name: "Steinar Þór Smári",
		paragraph:
			"Útskrifaðist hjá Menntaskólanum í Reykjavík árið 2021. Vann við forritun hjá sprotafyrirtækinu EatUP að þróa app fyrir notendur og veitingastaði.",
		image: CONTRIBUTORS.STEINAR_THOR_SMARI,
		socials: [
			{
				type: SocialMedia.LinkedIn,
				link: "https://www.linkedin.com/in/steinar-smari-8410881a9/",
			},
		],
	},
	{
		name: "Breki Guðmundsson",
		paragraph:
			"Lauk öðru ári í Tölvunarfræði í Háskólanum í Reykjavík núna í vor.",
		image: CONTRIBUTORS.BREKI_GUDMUNDSSON,
		socials: [],
	},
];
