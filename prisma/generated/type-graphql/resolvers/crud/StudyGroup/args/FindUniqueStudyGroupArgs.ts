import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupWhereUniqueInput } from "../../../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: StudyGroupWhereUniqueInput;
}
