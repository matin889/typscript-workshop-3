import z, { string } from "zod";
{
  interface People {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
  }

  const PersonSchema = z.object({
    name: z.string().min(5, { message: "Must be 5 or more characters long" }),
    height: z.string(),
    species: z.array(
      string().startsWith("https://", { message: "Must provide secure URL" })
    ),
    url: z.string().url({ message: "Invalid url" }),
    created: z.string().datetime(),
  });

  const fetchApi = async (): Promise<void> => {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    const people: People[] = data.results;

    const validatePerson = (person: unknown) => {
      return PersonSchema.safeParse(person);
    };

    people.forEach((person) => {
      const validPerson = validatePerson(person);
      if (validPerson.success) {
        console.log("Valid Person:", validPerson.data);
      } else {
        console.log("Validation error:", validPerson.error);
      }
    });
  };
  fetchApi();
}
