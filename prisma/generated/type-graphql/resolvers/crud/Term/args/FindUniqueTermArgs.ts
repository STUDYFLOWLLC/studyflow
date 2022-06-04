import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermWhereUniqueInput } from "../../../inputs/TermWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTermArgs {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;
}
