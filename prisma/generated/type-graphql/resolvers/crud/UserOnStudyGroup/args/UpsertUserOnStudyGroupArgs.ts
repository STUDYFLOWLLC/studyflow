import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupCreateInput } from "../../../inputs/UserOnStudyGroupCreateInput";
import { UserOnStudyGroupUpdateInput } from "../../../inputs/UserOnStudyGroupUpdateInput";
import { UserOnStudyGroupWhereUniqueInput } from "../../../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserOnStudyGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateInput, {
    nullable: false
  })
  create!: UserOnStudyGroupCreateInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateInput, {
    nullable: false
  })
  update!: UserOnStudyGroupUpdateInput;
}
