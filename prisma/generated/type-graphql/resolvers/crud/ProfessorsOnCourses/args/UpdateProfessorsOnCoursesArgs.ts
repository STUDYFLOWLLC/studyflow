import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesUpdateInput } from "../../../inputs/ProfessorsOnCoursesUpdateInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../../../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateInput, {
    nullable: false
  })
  data!: ProfessorsOnCoursesUpdateInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessorsOnCoursesWhereUniqueInput;
}
