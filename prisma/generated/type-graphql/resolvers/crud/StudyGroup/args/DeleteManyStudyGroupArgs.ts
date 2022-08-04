import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupWhereInput } from "../../../inputs/StudyGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  where?: StudyGroupWhereInput | undefined;
}
