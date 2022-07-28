import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupUpdateManyMutationInput } from "../../../inputs/StudyGroupUpdateManyMutationInput";
import { StudyGroupWhereInput } from "../../../inputs/StudyGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: StudyGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  where?: StudyGroupWhereInput | undefined;
}
