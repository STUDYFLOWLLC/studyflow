import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupWhereUniqueInput } from "../../../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserOnStudyGroupWhereUniqueInput;
}
