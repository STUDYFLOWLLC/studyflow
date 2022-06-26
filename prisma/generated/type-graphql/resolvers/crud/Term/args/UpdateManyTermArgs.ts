import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermUpdateManyMutationInput } from "../../../inputs/TermUpdateManyMutationInput";
import { TermWhereInput } from "../../../inputs/TermWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTermArgs {
  @TypeGraphQL.Field(_type => TermUpdateManyMutationInput, {
    nullable: false
  })
  data!: TermUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  where?: TermWhereInput | undefined;
}
