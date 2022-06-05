import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermCreateInput } from "../../../inputs/TermCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTermArgs {
  @TypeGraphQL.Field(_type => TermCreateInput, {
    nullable: false
  })
  data!: TermCreateInput;
}
