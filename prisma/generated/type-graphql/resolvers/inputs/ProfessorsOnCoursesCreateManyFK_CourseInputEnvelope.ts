import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateManyFK_CourseInput } from "../inputs/ProfessorsOnCoursesCreateManyFK_CourseInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateManyFK_CourseInput], {
    nullable: false
  })
  data!: ProfessorsOnCoursesCreateManyFK_CourseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
