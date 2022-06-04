import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesWhereInput } from "../../../inputs/ProfessorsOnCoursesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereInput, {
    nullable: true
  })
  where?: ProfessorsOnCoursesWhereInput | undefined;
}
