import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesWhereUniqueInput } from "../../../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;
}
