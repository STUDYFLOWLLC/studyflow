import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupUpdateInput } from "../../../inputs/StudyGroupUpdateInput";
import { StudyGroupWhereUniqueInput } from "../../../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupUpdateInput, {
    nullable: false
  })
  data!: StudyGroupUpdateInput;

  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: StudyGroupWhereUniqueInput;
}
