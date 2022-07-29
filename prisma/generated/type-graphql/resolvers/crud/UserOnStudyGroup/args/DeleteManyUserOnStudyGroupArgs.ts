import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupWhereInput } from "../../../inputs/UserOnStudyGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereInput, {
    nullable: true
  })
  where?: UserOnStudyGroupWhereInput | undefined;
}
