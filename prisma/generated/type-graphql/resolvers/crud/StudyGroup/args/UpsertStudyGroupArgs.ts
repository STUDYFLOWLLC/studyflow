import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupCreateInput } from "../../../inputs/StudyGroupCreateInput";
import { StudyGroupUpdateInput } from "../../../inputs/StudyGroupUpdateInput";
import { StudyGroupWhereUniqueInput } from "../../../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: StudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => StudyGroupCreateInput, {
    nullable: false
  })
  create!: StudyGroupCreateInput;

  @TypeGraphQL.Field(_type => StudyGroupUpdateInput, {
    nullable: false
  })
  update!: StudyGroupUpdateInput;
}
