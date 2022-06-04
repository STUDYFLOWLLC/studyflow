import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesCreateInput } from "../../../inputs/ProfessorsOnCoursesCreateInput";
import { ProfessorsOnCoursesUpdateInput } from "../../../inputs/ProfessorsOnCoursesUpdateInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../../../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateInput, {
    nullable: false
  })
  create!: ProfessorsOnCoursesCreateInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateInput, {
    nullable: false
  })
  update!: ProfessorsOnCoursesUpdateInput;
}
