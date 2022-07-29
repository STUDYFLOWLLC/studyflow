import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupCreateInput } from "../../../inputs/UserOnStudyGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateInput, {
    nullable: false
  })
  data!: UserOnStudyGroupCreateInput;
}
