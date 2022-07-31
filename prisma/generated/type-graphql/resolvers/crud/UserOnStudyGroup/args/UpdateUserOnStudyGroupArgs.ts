import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupUpdateInput } from "../../../inputs/UserOnStudyGroupUpdateInput";
import { UserOnStudyGroupWhereUniqueInput } from "../../../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateInput, {
    nullable: false
  })
  data!: UserOnStudyGroupUpdateInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserOnStudyGroupWhereUniqueInput;
}
