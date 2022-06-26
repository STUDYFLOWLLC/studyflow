import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermUpdateInput } from "../../../inputs/TermUpdateInput";
import { TermWhereUniqueInput } from "../../../inputs/TermWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTermArgs {
  @TypeGraphQL.Field(_type => TermUpdateInput, {
    nullable: false
  })
  data!: TermUpdateInput;

  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;
}
