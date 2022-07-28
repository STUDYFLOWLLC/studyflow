import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupUpdateManyMutationInput } from "../../../inputs/UserOnStudyGroupUpdateManyMutationInput";
import { UserOnStudyGroupWhereInput } from "../../../inputs/UserOnStudyGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserOnStudyGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereInput, {
    nullable: true
  })
  where?: UserOnStudyGroupWhereInput | undefined;
}
