import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyCreatedByUserInput } from "../inputs/FlowCreateManyCreatedByUserInput";

@TypeGraphQL.InputType("FlowCreateManyCreatedByUserInputEnvelope", {
  isAbstract: true
})
export class FlowCreateManyCreatedByUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowCreateManyCreatedByUserInput], {
    nullable: false
  })
  data!: FlowCreateManyCreatedByUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
