import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermCreateInput } from "../../../inputs/TermCreateInput";
import { TermUpdateInput } from "../../../inputs/TermUpdateInput";
import { TermWhereUniqueInput } from "../../../inputs/TermWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTermArgs {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;

  @TypeGraphQL.Field(_type => TermCreateInput, {
    nullable: false
  })
  create!: TermCreateInput;

  @TypeGraphQL.Field(_type => TermUpdateInput, {
    nullable: false
  })
  update!: TermUpdateInput;
}
