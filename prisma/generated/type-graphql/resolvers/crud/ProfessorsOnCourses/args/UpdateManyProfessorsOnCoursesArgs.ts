import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessorsOnCoursesUpdateManyMutationInput } from "../../../inputs/ProfessorsOnCoursesUpdateManyMutationInput";
import { ProfessorsOnCoursesWhereInput } from "../../../inputs/ProfessorsOnCoursesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProfessorsOnCoursesArgs {
  @TypeGraphQL.Field(_type => ProfessorsOnCoursesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProfessorsOnCoursesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesWhereInput, {
    nullable: true
  })
  where?: ProfessorsOnCoursesWhereInput | undefined;
}
