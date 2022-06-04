import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateManyFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateManyFK_ProfessorInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateManyFK_ProfessorInput], {
    nullable: false
  })
  data!: ProfessorsOnCoursesCreateManyFK_ProfessorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
