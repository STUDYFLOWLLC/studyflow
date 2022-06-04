import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesCreateWithoutFK_CourseInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateWithoutFK_CourseInput, {
    nullable: false
  })
  create!: ProfessorsOnCoursesCreateWithoutFK_CourseInput;
}
