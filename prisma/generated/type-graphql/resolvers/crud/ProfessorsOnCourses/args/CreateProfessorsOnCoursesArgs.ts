import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesCreateInput } from "../../../inputs/ProfessorsOnCoursesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateInput, {
    nullable: false
  })
  data!: ProfessorsOnCoursesCreateInput;
}
