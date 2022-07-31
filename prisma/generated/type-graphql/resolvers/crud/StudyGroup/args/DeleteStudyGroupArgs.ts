import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupWhereUniqueInput } from "../../../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: StudyGroupWhereUniqueInput;
}
