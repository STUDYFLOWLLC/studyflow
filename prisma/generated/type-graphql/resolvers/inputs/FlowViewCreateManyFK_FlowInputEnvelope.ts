import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateManyFK_FlowInput } from "../inputs/FlowViewCreateManyFK_FlowInput";

@TypeGraphQL.InputType("FlowViewCreateManyFK_FlowInputEnvelope", {
  isAbstract: true
})
export class FlowViewCreateManyFK_FlowInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowViewCreateManyFK_FlowInput], {
    nullable: false
  })
  data!: FlowViewCreateManyFK_FlowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
